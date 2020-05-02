/*
 *  Song specificiation for Alt Jazz song Lament 
 */

var altJazzSongs = altJazzSongs || {};

altJazzSongs["Octagon Warrior"] = {

    partsInBooks: {
        "Flute, Alto Flute & Piccolo": {
            "Octagon Warrior": [ "Flute" ], 
        },
        "English Horn": {
            "Octagon Warrior": [ "English Horn in F" ], 
        },
        "Bass Clarinet": {
            "Octagon Warrior": [ "Bass Clarinet in Bb" ],
        },
        "Voice/Percussion": {
            "Octagon Warrior": [ "Voice" ],
        },
        "Drums": {
            //"Octagon Warrior": [ "Drums" ], 
        },
        "Violin I": {
            "Octagon Warrior": [ "Violin I" ], 
        },
        "Violin II": {
            "Octagon Warrior": [ "Violin II" ], 
        },
        "Viola": {
            "Octagon Warrior": [ "Viola" ], 
        },
        "'Cello": {
            "Octagon Warrior": [ "'Cello" ],
        },
        "Bass": {
            "Octagon Warrior": [ "Bass" ], 
        }
    },

    songs: {

        "Octagon Warrior": {
            metadata: { 
                title: "Octagon Warrior",
                composer: "Elaine Paul",
                arranger: "Elaine Paul",
                genre: "Punk Rock",
                bpm: '172bpm',
                key: "E Major"
            },
            baseUrl: 'http://ali-cia.net/altjazz/scores/', 
            pdfSubdir: "/",
            fileLocation: "octagon-warrior",
            filePrefix: "octagon-warrior-",
            parts: {
                "Flute": { fileSuffix: "Flute" },
                "English Horn in F": { fileSuffix: "English-Horn-in-F" },
                //"Clarinet in A": { fileSuffix: "Clarinet-in-A" },
                "Bass Clarinet in Bb": { fileSuffix: "Bass-Clarinet-in-Bb" },
                //"Bassoon": { fileSuffix: "Bassoon" },
                //"Trumpet in Bb": { fileSuffix: "Trumpet-in-Bb" },
                //"Horn in F": { fileSuffix: "Horn-in-F" },
                //"Trombone": { fileSuffix: "Trombone" },
                //"Clave": { fileSuffix: "Clave" },
                //"Piano": { fileSuffix: "Piano" },
                "Voice": { fileSuffix: "Voice" },
                "Violin I": { fileSuffix: "Violin-I" },
                "Violin II": { fileSuffix: "Violin-II" },
                "Viola": { fileSuffix: "Viola" },
                "'Cello": { fileSuffix: "Cello" },
                "Bass": { fileSuffix: "Bass" },
            },
            scores: {
                //"Rhythm": { fileSuffix: "Rhythm" },
                //"Condensed Score": { fileSuffix: "Condensed-Score" },
                "Score Transposed": { fileSuffix: "Score-Transposed" },
                //"Score Concert": { fileSuffix: "Score-Concert" },
                //"Lead Sheet": { fileSuffix: "Lead-Sheet" },
            },
            recordings: {
                demo: {
                    description: 'Rererence for tracking (8 bars out front), on SoundCloud',
                    url: 'https://soundcloud.com/david-elaine-alt/octagon-warrior-reference-track/s-DxznZgcPmlJ'
                },
                reference: {
                    description: 'Reference for tracking (8 bars out front), on Google Drive',
                    url: 'https://drive.google.com/open?id=1NBZeK9jzdQ8OhbdF6KI50EV99XPjbz4M'
                },
                reading: {
                    description: 'reading',
                    url: ''
                },
                recording: {
                    description: 'recording',
                    url: ''
                },
                live: {
                    description: 'live',
                    url: ''
                }
            }
        }
    }
};