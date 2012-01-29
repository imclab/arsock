# arsock

__arsock__ is socket server for arsapp. arsock provides storing sensed data and accessing data for some visialization.

## Authors

  - Seiya Konno &lt;seiya@uniba.jp&gt; ([nulltask](https://github.com/nulltask))
  - Haruma Kikuchi &lt;haruma@uniba.jp&gt; ([norhythm](https://github.com/kikuchiharuma))
  - hitsujiwool ([hitsujiwool](https://github.com/hitsujiwool))

## Requirement

* Node v0.6.x
* MongoDB

## Installation

#### Install MongoDB 


    $ brew install mongodb
    $ mongod run --config /path/to/mongod.conf

#### Install Node v0.4.7 (using nave)

    $ nave install 0.6.9
    $ nave use 0.4.9

#### Grab code and resolving module dependencies.

    $ git clone git@github.com:uniba/arsock.git
    $ cd arsock
    $ npm instal;

#### Run
    
    $ ARSOCK_MONGODB_URI=mongodb://localhost/utropy node web

## Deployment

#### Deploy with capistrano

    $ cap deploy

## License

(The MIT License)

Copyright (c) 2011, 2012 Uniba Inc. &lt;info@uniba.jp&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.