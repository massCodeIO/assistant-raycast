export type Language =
  | 'abap'
  | 'abc'
  | 'actionscript'
  | 'ada'
  | 'alda'
  | 'apache_conf'
  | 'apex'
  | 'applescript'
  | 'aql'
  | 'asciidoc'
  | 'asl'
  | 'assembly_x86'
  | 'autohotkey'
  | 'batchfile'
  | 'c9search'
  | 'cirru'
  | 'clojure'
  | 'cobol'
  | 'coffee'
  | 'coldfusion'
  | 'crystal'
  | 'csharp'
  | 'csound_document'
  | 'csound_orchestra'
  | 'csound_score'
  | 'csp'
  | 'css'
  | 'curly'
  | 'c_cpp'
  | 'd'
  | 'dart'
  | 'diff'
  | 'django'
  | 'dockerfile'
  | 'dot'
  | 'drools'
  | 'edifact'
  | 'eiffel'
  | 'ejs'
  | 'elixir'
  | 'elm'
  | 'erlang'
  | 'forth'
  | 'fortran'
  | 'fsharp'
  | 'fsl'
  | 'ftl'
  | 'gcode'
  | 'gherkin'
  | 'gitignore'
  | 'glsl'
  | 'gobstones'
  | 'golang'
  | 'graphqlschema'
  | 'groovy'
  | 'haml'
  | 'handlebars'
  | 'haskell'
  | 'haskell_cabal'
  | 'haxe'
  | 'hjson'
  | 'html'
  | 'html_elixir'
  | 'html_ruby'
  | 'ini'
  | 'io'
  | 'jack'
  | 'jade'
  | 'java'
  | 'javascript'
  | 'json'
  | 'json5'
  | 'jsoniq'
  | 'jsp'
  | 'jssm'
  | 'jsx'
  | 'julia'
  | 'kotlin'
  | 'latex'
  | 'latte'
  | 'less'
  | 'liquid'
  | 'lisp'
  | 'livescript'
  | 'logiql'
  | 'logtalk'
  | 'lsl'
  | 'lua'
  | 'luapage'
  | 'lucene'
  | 'makefile'
  | 'markdown'
  | 'mask'
  | 'matlab'
  | 'maze'
  | 'mediawiki'
  | 'mel'
  | 'mips'
  | 'mixal'
  | 'mushcode'
  | 'mysql'
  | 'nginx'
  | 'nim'
  | 'nix'
  | 'nsis'
  | 'nunjucks'
  | 'objectivec'
  | 'ocaml'
  | 'pascal'
  | 'perl'
  | 'pgsql'
  | 'php'
  | 'php_laravel_blade'
  | 'pig'
  | 'plain_text'
  | 'powershell'
  | 'praat'
  | 'prisma'
  | 'prolog'
  | 'properties'
  | 'protobuf'
  | 'puppet'
  | 'python'
  | 'qml'
  | 'r'
  | 'raku'
  | 'razor'
  | 'rdoc'
  | 'red'
  | 'redshift'
  | 'rhtml'
  | 'rst'
  | 'ruby'
  | 'rust'
  | 'sass'
  | 'scad'
  | 'scala'
  | 'scheme'
  | 'scrypt'
  | 'scss'
  | 'sh'
  | 'sjs'
  | 'slim'
  | 'smarty'
  | 'smithy'
  | 'soy_template'
  | 'space'
  | 'sparql'
  | 'sql'
  | 'sqlserver'
  | 'stylus'
  | 'svg'
  | 'swift'
  | 'tcl'
  | 'terraform'
  | 'tex'
  | 'text'
  | 'textile'
  | 'toml'
  | 'tsx'
  | 'turtle'
  | 'twig'
  | 'typescript'
  | 'vala'
  | 'vbscript'
  | 'velocity'
  | 'verilog'
  | 'vhdl'
  | 'visualforce'
  | 'wollok'
  | 'xml'
  | 'xquery'
  | 'yaml'
  | 'zeek'


export interface Folder {
  id: string
  name: string
  defaultLanguage: Language
  parentId: string | null
  isOpen: boolean
  isSystem: boolean
  createdAt: number
  updatedAt: number
}

export interface SnippetContent {
  label: string;
  language: string;
  value: string;
}

export interface Snippet {
  id: string;
  name: string;
  content: SnippetContent[];
  folderId: string;
  folder: Folder
  tagsIds: string[];
  isFavorites: boolean;
  isDeleted: boolean;
  createdAt: number;
  updatedAt: number;
}


export interface State {
  snippets?: Snippet[];
  error?: Error;
}
