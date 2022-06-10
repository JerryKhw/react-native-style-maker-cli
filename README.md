react-native-style-maker-cli
=================

react native style maker cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/react-native-style-maker-cli.svg)](https://npmjs.org/package/react-native-style-maker-cli)
[![Downloads/week](https://img.shields.io/npm/dw/react-native-style-maker-cli.svg)](https://npmjs.org/package/react-native-style-maker-cli)
[![License](https://img.shields.io/npm/l/react-native-style-maker-cli.svg)](https://github.com/hwJames/react-native-style-maker-cli/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g react-native-style-maker-cli
$ style-maker COMMAND
running command...
$ style-maker (--version)
react-native-style-maker-cli/0.0.3 darwin-x64 node-v16.14.2
$ style-maker --help [COMMAND]
USAGE
  $ style-maker COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`style-maker create`](#style-maker-create)
* [`style-maker help [COMMAND]`](#style-maker-help-command)
* [`style-maker init`](#style-maker-init)
* [`style-maker plugins`](#style-maker-plugins)
* [`style-maker plugins:install PLUGIN...`](#style-maker-pluginsinstall-plugin)
* [`style-maker plugins:inspect PLUGIN...`](#style-maker-pluginsinspect-plugin)
* [`style-maker plugins:install PLUGIN...`](#style-maker-pluginsinstall-plugin-1)
* [`style-maker plugins:link PLUGIN`](#style-maker-pluginslink-plugin)
* [`style-maker plugins:uninstall PLUGIN...`](#style-maker-pluginsuninstall-plugin)
* [`style-maker plugins:uninstall PLUGIN...`](#style-maker-pluginsuninstall-plugin-1)
* [`style-maker plugins:uninstall PLUGIN...`](#style-maker-pluginsuninstall-plugin-2)
* [`style-maker plugins update`](#style-maker-plugins-update)

## `style-maker create`

Create style file

```
USAGE
  $ style-maker create

DESCRIPTION
  Create style file
```

_See code: [dist/commands/create/index.ts](https://github.com/hwJames/react-native-style-maker-cli/blob/v0.0.3/dist/commands/create/index.ts)_

## `style-maker help [COMMAND]`

Display help for style-maker.

```
USAGE
  $ style-maker help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for style-maker.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `style-maker init`

Make config file. (style-maker.config.js)

```
USAGE
  $ style-maker init

DESCRIPTION
  Make config file. (style-maker.config.js)
```

_See code: [dist/commands/init/index.ts](https://github.com/hwJames/react-native-style-maker-cli/blob/v0.0.3/dist/commands/init/index.ts)_

## `style-maker plugins`

List installed plugins.

```
USAGE
  $ style-maker plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ style-maker plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.0/src/commands/plugins/index.ts)_

## `style-maker plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ style-maker plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ style-maker plugins add

EXAMPLES
  $ style-maker plugins:install myplugin 

  $ style-maker plugins:install https://github.com/someuser/someplugin

  $ style-maker plugins:install someuser/someplugin
```

## `style-maker plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ style-maker plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ style-maker plugins:inspect myplugin
```

## `style-maker plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ style-maker plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ style-maker plugins add

EXAMPLES
  $ style-maker plugins:install myplugin 

  $ style-maker plugins:install https://github.com/someuser/someplugin

  $ style-maker plugins:install someuser/someplugin
```

## `style-maker plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ style-maker plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ style-maker plugins:link myplugin
```

## `style-maker plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ style-maker plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ style-maker plugins unlink
  $ style-maker plugins remove
```

## `style-maker plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ style-maker plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ style-maker plugins unlink
  $ style-maker plugins remove
```

## `style-maker plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ style-maker plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ style-maker plugins unlink
  $ style-maker plugins remove
```

## `style-maker plugins update`

Update installed plugins.

```
USAGE
  $ style-maker plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
