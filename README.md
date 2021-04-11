![Alt text](Media/ReynbOS_Logo.png?raw=true "ReynbOS")
# ReynbOS

This is the public and Official repository for the ReynbOS distro,
a lot of work is being done configuring it at the moment, so more information will follow.

## Basic
ReynbOS is a debian based distro with emphasis on script first mindset,
recipes will be added later, but you'll have a basic distro with an i3 window manager,
firefox, vscode, drivers, utilites and system tools.

As this is a live distrobution we need a release schedule, which will be put up soon using github actions
to get a CI integration going for weekly updates.

<a href="https://www.buymeacoffee.com/theoistic" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

## Bootstrap

I've made it easy for you to join in and start tinkering with ReynbOS and start submitting pull requests
note that as of now, the build process as only been tested on `Debian` and `Ubuntu` since the distro is debian based its recommended to build and test it on a debian based distro.

```bash
git clone https://github.com/Theoistic/ReynbOS.git
```

install the required packages

```bash
sudo .\reynbos requirements
```

To build the iso, note that this process can take a while, since its downloading all the required debian packages to build an entire distro

```bash
sudo .\reynbos bootstrap
```

after you've generated the iso, you can go ahead and test it.

```bash
sudo .\reynbos test
```

## Key bindings

| Key Binding               | Action                     |
| ------------------------- |:--------------------------:|
| Alt+Return                | open a terminal            |
| Alt+Shift+q               | exit window                |
| Alt+d                     | application launcher       |
| Alt+c                     | vscode                     |
| Alt+b                     | browser                    |
| Alt+f                     | full screen                |

for more information on keybindings please refer to [i3 Configuration File](/rootfs/root/.config/i3/config)
if you wish to change the key bindings, please refer to the [i3 Manual](https://i3wm.org/docs/userguide.html#keybindings)

## ToDo

Before we can move to an offical release, these need to be implemented.

* Implement the Recipe Fetching.
* Create basic Recipes.
* Documentation.

### Help

Please refer to the github [Discussions](https://github.com/Theoistic/ReynbOS/discussions) 
alternatively you can check out the [over-the-raynbow discord server](https://discord.gg/6G2anKVE) 
i'll be posting some developmental post on my blog at [@theoistic](https://theoistic.com/) 
