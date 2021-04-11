---
title: ReynbOS Official Beta Release
tags: announcement
author: Theoistic
---

# ReynbOS Official Beta Release

I've been playing around with this project for far too long and thought it was about time i sat down and actually made some propper progress.

### Why

ReynbOS was first born out of a live video call where we joked about Rey having her own Operating System, and as stupid as i normally am. Thought this was a fun little idea and took it to heart.
my first idea was to find an old micro-kernel i build a couple of years ago, but then it dawned on me. If Rey is doing all these *nix "hacking"/dorking videos for her audience, a custom micro-kernel with no toolchain has no life within this community, so i switched to linux.

### From Scratch?

This of course has its own little issues, such as ARE WE REALLY going to build out our own repositories and bootstrap this kernel from scratch, or are we going to go the classic route that 
oh so many other distros are doing, such as Kali (backtrack), Ubuntu to name a few, and base this distro upon another. Such as Debian..
If we want a full suite of tools and utilities to play with debian is THE BEST place to be. when taking compatibility in to account. 
Now we have to make this lightweight since many within the community want to run this via USB (live distro) since they dont want to sacrifise their presious windows PC.

### What Now?

There are other things i want to add before we set it as the official stable release.
such as adding recipes so if people are interested in some hacky dorky scripts and framework we can simply write "fetch sherlock"
and it will clone the latest git commit, install all the latest requirements and basically setup your system so its just jumping in and playing around with it.
other recipes might be larger, such as fetching metasploit and basic listeners such as wireshark. the reason for recipes it to keep the live distro up to date
and lightweight, if i could just download all the software i thought you would like, we would be talking about terabytes.

So ReynbOS is a lightweight debian based distro with the required toolchain to get you up and running as a hacky dorky dev script kiddy with room to grow.

### Can I Join/Help?

We got a discussion board on github, please join in and give your feedback, and ofc, if you feel adventurous, you are also welcome to clone the repository and submit a pull request.
cuz after all, its a distrobution that is suppose to suit you and the Rey.nbows community.