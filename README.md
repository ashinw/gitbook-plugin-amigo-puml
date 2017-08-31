# gitbook-plugin-amigo-puml

This is a [PlantUML](http://www.plantuml.com/index.html) plugin for GitBook that embeds SVG xml directly within the generated HTML. This differs from the other plugins which all create external image files.  

Note, this is a private plugin and therefore you cannot get it via NPM. The reason this is private is because I have no intention of supporting it. It was created to serve my purpose and I'm leaving it available for others.


## Installation

Gitbook Amigo-PUML plugin can be installed from NPM using:

book.json add the plugin

```
{
  "plugins": [
    "amigo-puml@git+https://github.com/ashinw/gitbook-plugin-amigo-puml.git#0.0.1"
  ]
}
```

## Features

* Support `` ```plantuml `` code block quote in line with the [VSCode PlantUML extension](https://github.com/qjebbs/vscode-plantuml)
* Multi code style support

## Usage

To include a PlantUML diagram, just wrap your definition in a "plantuml" code block. For example:

*Text format plantuml:*

<pre><code>```plantuml
@startuml

	Class Stage
	Class Timeout {
		+constructor:function(cfg)
		+timeout:function(ctx)
		+overdue:function(ctx)
		+stage: Stage
	}
 	Stage &lt;|-- Timeout

@enduml
```
</code></pre>

Also you can put in your book block as

```
{% plantuml %}
@startuml

	Class Stage
	Class Timeout {
		+constructor:function(cfg)
		+timeout:function(ctx)
		+overdue:function(ctx)
		+stage: Stage
	}
 	Stage &lt;|-- Timeout

@enduml
{% endplantuml %}
```

## Configuration

book.json add the uml options

Configure plugin in `book.json`.


```
"pluginsConfig": {
  "uml": {
    format: 'png',
    nailgun: false
  }
}
```

This plugin uses [Nailgun](http://martiansoftware.com/nailgun/) via [node-plantuml](https://github.com/markushedvall/node-plantuml)


## Activation

This plugin only works in your local machine. 


You need to play with local `gitbook` (command-line tool) to pre-compile all uml images.

```$ gitbook serve```

or

```$ gitbook build```


## Requisute Support Software:
1. Java Runtime Environment JRE
1. Graphviz


## Public build of alternative versions
If you want an NPM package that has similar features then consider the following:
1. [lyhcode/gitbook-plugin-plantuml](https://github.com/lyhcode/gitbook-plugin-plantuml)
1. [vowstar/gitbook-plugin-uml](https://github.com/vowstar/gitbook-plugin-uml)