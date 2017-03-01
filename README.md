# ZeXtras' `src/zimbra`
An **unofficial** [TypeScript][2] library to build awesome [Zimlets][1], by [ZeXtras][5].

This library is created ho help developers to use latest technologies (like [TypeScript][2]) to build [Zimlets][1] for 
[Zimbra][0] easily.

This library **is not** a complete reference for [Zimbra][0], is built on developer needs and still grow!

Adding this library to the source tree of Your code allow you to `require` the [Zimbra][0]'s classes and, if your editor
support it, get the contextual auto-complete.

This allow you to write code easily and with the typed code, securely.

## Usage
1. Put this folder (the root of this project) into your source folder. The best option for getting updates is to add this
   repository as submodule.
2. Configure your build system (i suggest You to use [webpack][3]) to include the `.js` version of the files.
3. Develop your [Zimlet][1]
4. Deploy!

## How to contribute
Not all the classes are ported into the library, some are missing, other does not have all of the methods. 

PR are suggested to let the library grow! You can use it, but any help is appreciated and your name will be put in the 
wall of fame!

1. Add fixes, methods and classes You need into Your project, write the `.ts` file. Please refer to the original Zimbra 
  source files, visible with the `?dev=1` parameter.
2. Create the `.js` exporter using the script `syncFromTs`.
3. Review the generated files (printed by the previous script) and fix them if needed.
4. Commit and send a PR.

If you need help We are happy to give You an hand in [ZeXtras IRC Channel][4]

## Useful links
- [TypeScript][2]
- [Zimbra][0]
- [Introduction to Zimlet Development][1]
- [webpack][3]
- [ZeXtras IRC Channel][4]

[0]: https://www.zimbra.org/
[1]: https://wiki.zimbra.com/index.php?title=Zimlet_Developers_Guide:Introduction
[2]: http://www.typescriptlang.org/ 
[3]: https://webpack.js.org/
[4]: https://webchat.freenode.net/?channels=%23zextras
[5]: https://www.zextras.com/

## Wall of fame
- [Michele Olivo](https://github.com/bud-mo)
- [Stefano Grasselli](https://github.com/StefanoGrasselli)
