
var ReynbosWeb = {
    webPostsSource: '',
    navel: '',
    articletag: '',
    posts: [],
    MarkdownRules:  [  
        {regex: /(#+)(.*)/g, replacement: (text, chars, content) => {
            var level = chars.length;
            return '<h' + level + '>' + content.trim() + '</h' + level + '>';
        }},
        {regex: /!\[([^[]+)\]\(([^)]+)\)/g, replacement: '<img src=\'$2\' alt=\'$1\'>'},
        {regex: /\[([^[]+)\]\(([^)]+)\)/g, replacement: '<a href=\'$2\'>$1</a>'},
        {regex: /(\*\*|__)(.*?)\1/g, replacement: '<strong>$2</strong>'},
        {regex: /(\*|_)(.*?)\1/g, replacement: '<em>$2</em>'},
        {regex: /~~(.*?)~~/g, replacement: '<del>$1</del>'},
        {regex: /:"(.*?)":/g, replacement: '<q>$1</q>'},
        {regex: /```[a-z]*\n[\s\S]*?\n```/g, replacement: (text) => {
            text = text.replace(/```/gm, '');
            return '<pre>' + text.trim() + '</pre>';
        }},
        {regex: /&&&[a-z]*\n[\s\S]*?\n&&&/g, replacement: (text) => {
            text = text.replace(/```/gm, '');
            return '<script type="text/javascript">' + text.trim() + '</script>';
        }},
        {regex: /`(.*?)`/g, replacement: '<code>$1</code>'},
        {regex: /\n\*(.*)/g, replacement: (text, item) => {
            return '\n<ul>\n\t<li>' + item.trim() + '</li>\n</ul>';
        }},
        {regex: /\n[0-9]+\.(.*)/g, replacement: (text, item) => {
            return '\n<ol>\n\t<li>' + item.trim() + '</li>\n</ol>';
        }},
        {regex: /\n(&gt;|>)(.*)/g, replacement: (text, tmp, item) => {
            return '\n<blockquote>' + item.trim() + '</blockquote>';
        }},
        {regex: /\n-{5,}/g, replacement: '\n<hr />'},
        {regex: /\n([^\n]+)\n/g, replacement: (text, line) => {
            var trimmed = line.trim();
            if (/^<\/?(ul|ol|li|h|p|bl)/i.test(trimmed)) {
            return '\n' + line + '\n';
            }
            return '\n<p>' + trimmed + '</p>\n';
        }},
        {regex: /<\/ul>\s?<ul>/g, replacement: ''},
        {regex: /<\/ol>\s?<ol>/g, replacement: ''},
        {regex: /<\/blockquote><blockquote>/g, replacement: '\n'}
    ],
    Render: function (text, el) {
        text = '\n' + text + '\n';
        this.MarkdownRules.forEach(function(rule) {
            text = text.replace(rule.regex, rule.replacement);
        });
        if(el !== undefined) {
            document.getElementById(el).innerHTML = text.trim();
        }
        // re-render the navigation
        document.getElementById(this.navel).innerHTML = '';
        this.posts.forEach(element => {
            if(element.slug) {
                var menuItem = document.createElement('li');
                var menuItemLink = document.createElement('a');
                menuItemLink.setAttribute('href', '#'+element.slug);
                menuItemLink.innerHTML = element.name;
                if(location.hash == '#'+element.slug) {
                    menuItem.setAttribute('class', 'selected');
                }
                menuItem.appendChild(menuItemLink);
                document.getElementById(this.navel).appendChild(menuItem);
            }
        });
        return text.trim();
    },
    Get: function (request){
        var Httpreq = new XMLHttpRequest(); 
        Httpreq.open("GET",request,false);
        Httpreq.send(null);
        return Httpreq.responseText;          
    },
    GetJson: function (request) {
        return JSON.parse(this.Get(request));
    },
    GetPosts: function () {
        var _posts = this.GetJson(this.webPostsSource);
        var fetchedPosts = [];
        var metaSeperator = '---';
        (_posts).forEach(element => {
            if(element.name.indexOf('.md') > 0) {
                var content = this.Get(element.download_url);
                var body = content.split(metaSeperator).splice(2).join(metaSeperator);
                var attributes = {};
                var yaml = content.split(metaSeperator)[1];
                if (yaml) {
                    yaml.split(/\n/g).forEach((attributeStr) => {
                        var attribute = attributeStr.split(':');
                        attribute[1] && (attributes[attribute[0].trim()] = attribute[1].trim());
                    });
                }
                fetchedPosts.push({
                    name: element.name.replace('.md', '').replaceAll('-', ' '),
                    slug: element.name.replace('.md',''),
                    url: element.download_url,
                    attributes: attributes,
                    body: body
                });
            }
        });
        return fetchedPosts;
    },
    Routing: function() {
        console.log('routing to: ' + location.hash);
        ReynbosWeb.posts.forEach(function(element) {
            if('#'+element.slug == location.hash) {
                ReynbosWeb.Render(element.body, ReynbosWeb.articletag);
            }
        });
    },
    InitDoc: function (usr, repo, dir, articletag, navel) {
        // Set global constants.
        this.articletag = articletag;
        this.navel = navel;
        this.webPostsSource = 'https://api.github.com/repos/'+usr+'/'+repo+'/contents/'+dir,
        // Fetch posts.
        this.posts = this.GetPosts();
        // Setup routing.
        window.addEventListener("hashchange", this.Routing, false);
        if(!location.hash) {
            location.hash = this.posts[0].slug;
        }
        this.Routing();
    }
}

// utilities
var get = function (selector, scope) {
    scope = scope ? scope : document;
    return scope.querySelector(selector);
  };
  
  var getAll = function (selector, scope) {
    scope = scope ? scope : document;
    return scope.querySelectorAll(selector);
  };
  
  // fix menu to page-top once user starts scrolling
  window.addEventListener('scroll', function () {
    var docNav = get('.doc__nav > ul');
  
    if( docNav) {
      if (window.pageYOffset > 63) {
        docNav.classList.add('fixed');
      } else {
        docNav.classList.remove('fixed');
      }
    }
  });
  
  // responsive navigation
  var topNav = get('.menu');
  var icon = get('.toggle');
  
  window.addEventListener('load', function(){
    function showNav() {
      if (topNav.className === 'menu') {
        topNav.className += ' responsive';
        icon.className += ' open';
      } else {
        topNav.className = 'menu';
        icon.classList.remove('open');
      }
    }
    icon.addEventListener('click', showNav);
  });
  