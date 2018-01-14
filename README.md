# Imp, a discord bot

![](https://imgur.com/a/QOqGY)

## Quick description

This is just a very simple discord bot that I adapted from a bunch of online guides/gists in order to be able to test my stuff.

## Dependencies

* NPM
* Node
* Discord.JS

## Instructions

1. Follow the bot creation at https://twentysix26.github.io/Red-Docs/red_guide_bot_accounts/#creating-a-new-bot-account
1. Copy and rename _config.json.example_ to _config.json_
1. Get the bot token at https://discordapp.com/developers/applications/me/
1. Fill the token in the appropriate place in _config.json_
1. Run:

```shell
npm install
node app.js
```

## What can I do with the bot

In order to send commands to the bot through the discord chat you need to prefix them with the "|" character

| Command | Arguments |                            Description                             |
| ------- | :-------: | -----------------------------------------------------------------: |
| ping    |    no     |                          Answers back with a pong and some metrics |
| say     |    yes    | It types the message you sent as an argument with a nice prefix :3 |
