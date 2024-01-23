const core = require('@actions/core');

await core.summary
            .addHeading('Example')
            .addTable([
                        [{data: 'Topic', header: true}, {data: 'Count', header: true}, {data: 'Public', header: true}],
                        ['foo.js' , "1", "2"],
                        ['bar.js' , '3', '4'],
                        ['test.js', 100, 200]
                      ])
            .write()