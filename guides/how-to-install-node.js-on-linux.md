# How to install node.js on Linux

{% hint style="info" %}
 This guide is for Linux Debian 8, but should also work for all major Debian and Ubuntu releases.
{% endhint %}

## Some things before you can install node.js

First you should ensure, that everything is up-to-date. You can update everything by using the following commands in the terminal:

```
$ apt update
```

```text
$ apt upgrade
```

Then you have to run the following command for node.js 8:

```text
$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
```

Or the following command for node.js 10

```text
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
```

## Install node.js itself

To install node.js you just have to run the following command:

```text
$ sudo apt-get install -y nodejs
```



