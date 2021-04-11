---
title: Getting Started
tags: guide
author: Theoistic
---

# Getting Started

Welcome, and thank you for taking an interest in ReynbOS. Lets get started..

### Installing ReynbOS Build Script

```
sudo wget https://reynbos.live/reynbos -O /usr/local/bin/reynbos
```

This will install reynbos globally on your machine so you can always access the build script.

To make sure you have all the system requirements on your machine to build/run ReynbOS lets install some packages...

```
sudo reynbos requirements
```

this will install all the requirements for building and testing reynbos locally..

### Picking a FLAVOR

We have a few recipes to get you started with the ReynbOS target you want.

Current Options are:
* Developer
* Hacker

if you want a development centric ReynbOS distro, you can choose the Developer option. If you want to experiment with some pentesting the Hacker option is a great choice. These two can always be mixed later, the Recipe option will help build the initial ISO image, you can always after flashing a persistant copy to a USB, choose to install the other recipes and double down on the size requirements.

If we want to bootstrap ReynbOS we need to pick a flavor and build the ISO image, note this might take a while...

```
sudo reynbos bootstrap Hacker
```

After the process has been completed you should have ReynbOS.iso in the same folder your terminal is pointing towards.

### Testing

We've made it easy to test ReynbOS before you flash it to a USB.. To test it locally, cd in to the directory where the *.iso file is located.

```
reynbos test
```

This will boot the iso up with qemu to test the features.

### Flashing

Insert the USB into your machine, and run

```
sudo reynbos persist /dev/sda
```

That will flash the ISO with persistance to the drive.

**Note that you need to make sure you are pointing to the correct dev, if sda is not your USB it will remove all files on  that drive and replace it with ReynbOS, We take no resposibiliy if you target the wrong drive** 

that is a very important note. if you are having problems with flashing or bootstrapping ReynbOS please refer to the github discussions.

### Credentials

So as a live distro, we've setup a base user which ofc is rey, with the password: l33t