# amazing-package

[![npm version](https://badge.fury.io/js/amazing-package.svg)](https://www.npmjs.com/package/amazing-package)

`amazing-package` is Hello World

```sh
yarn add amazing-package
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`async amazingPackage(config: !Config): string`](#async-mynewpackageconfig-config-string)
  * [`Config`](#type-config)
- [CLI](#cli)
- [Copyright & License](#copyright--license)

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/0.svg?sanitize=true">
</a></p>

## API

The package is available by importing its default function:

```js
import amazingPackage from 'amazing-package'
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/1.svg?sanitize=true">
</a></p>

## <code>async <ins>amazingPackage</ins>(</code><sub><br/>&nbsp;&nbsp;`config: !Config,`<br/></sub><code>): <i>string</i></code>
Hello World

 - <kbd><strong>config*</strong></kbd> <em><code><a href="#type-config" title="Options for the program.">!Config</a></code></em>: The config.

__<a name="type-config">`Config`</a>__: Options for the program.


|   Name    |       Type       |    Description    | Default |
| --------- | ---------------- | ----------------- | ------- |
| shouldRun | <em>boolean</em> | A boolean option. | `true`  |
| text      | <em>string</em>  | A text to return. | -       |

```js
import amazingPackage from 'amazing-package'

(async () => {
  const res = await amazingPackage({
    text: 'example',
  })
  console.log(res)
})()
```
```
amazing-package called with example
example
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/2.svg?sanitize=true">
</a></p>

## CLI

The package can also be used from the CLI.

<table>
 <thead>
  <tr>
   <th>Argument</th> 
   <th>Short</th>
   <th>Description</th>
  </tr>
 </thead>
  <tr>
   <td>input</td>
   <td></td>
   <td>The path to the input file.</td>
  </tr>
  <tr>
   <td>--output</td>
   <td>-o</td>
   <td>Where to save the output. By default prints to stdout. Default <code>-</code>.</td>
  </tr>
  <tr>
   <td>--init</td>
   <td>-i</td>
   <td>Initialise in the current folder.</td>
  </tr>
  <tr>
   <td>--help</td>
   <td>-h</td>
   <td>Print the help information and exit.</td>
  </tr>
  <tr>
   <td>--version</td>
   <td>-v</td>
   <td>Show the version's number and exit.</td>
  </tr>
</table>

```
Hello World

  amazing-package input [-o output] [-ihv]

	input        	The path to the input file.
	--output, -o 	Where to save the output. By default prints to stdout.
	             	Default: -.
	--init, -i   	Initialise in the current folder.
	--help, -h   	Print the help information and exit.
	--version, -v	Show the version's number and exit.

  Example:

    amazing-package example.txt -o out.txt
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/3.svg?sanitize=true">
</a></p>

## Copyright & License

GNU Affero General Public License v3.0

<table>
  <tr>
    <td><img src="https://avatars3.githubusercontent.com/u/38815725?v=4&amp;s=100" alt="4r7d3c0"></td>
    <td>© <a href="https://www.artd.eco">Art Deco™</a> 2020</td>
  </tr>
</table>

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/-1.svg?sanitize=true">
</a></p>