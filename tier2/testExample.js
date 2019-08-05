//Sample from call to conceptnet
module.exports = {
  "@context": [
    "http://api.conceptnet.io/ld/conceptnet5.7/context.ld.json"
  ],
  "@id": "/query?rel=/r/IsA&node=/c/en/example",
  "edges": [
    {
      "@id": "/a/[/r/IsA/,/c/en/example/n/wn/cognition/,/c/en/information/n/wn/cognition/]",
      "@type": "Edge",
      "dataset": "/d/wordnet/3.1",
      "end": {
        "@id": "/c/en/information/n/wn/cognition",
        "label": "information",
      },
      "start": {
        "@id": "/c/en/example/n/wn/cognition",
        "label": "example",
      },
      "surfaceText": "[[example]] is a type of [[information]]",
      "weight": 2.0
    },
    {
      "@id": "/a/[/r/IsA/,/c/en/exception/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
      "@type": "Edge",
      "dataset": "/d/wordnet/3.1",
      "end": {
        "@id": "/c/en/example/n/wn/cognition",
        "label": "example",
      },
      "start": {
        "@id": "/c/en/exception/n/wn/cognition",
        "label": "exception",
      },
      "surfaceText": "[[exception]] is a type of [[example]]",
      "weight": 2.0
    },
    {
      "@id": "/a/[/r/IsA/,/c/en/quintessence/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
      "@type": "Edge",
      "dataset": "/d/wordnet/3.1",
      "end": {
        "@id": "/c/en/example/n/wn/cognition",
        "label": "example",
      },
      "start": {
        "@id": "/c/en/quintessence/n/wn/cognition",
        "label": "quintessence",
      },
      "surfaceText": "[[quintessence]] is a type of [[example]]",
      "weight": 2.0
    },
    {
      "@id": "/a/[/r/IsA/,/c/en/sample/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
      "@type": "Edge",
      "dataset": "/d/wordnet/3.1",
      "end": {
        "@id": "/c/en/example/n/wn/cognition",
        "label": "example",
      },
      "start": {
        "@id": "/c/en/sample/n/wn/cognition",
        "label": "sample",
      },
      "surfaceText": "[[sample]] is a type of [[example]]",
      "weight": 2.0
    },
    {
      "@id": "/a/[/r/IsA/,/c/en/example/n/wn/communication/,/c/en/admonition/n/wn/communication/]",
      "@type": "Edge",
      "dataset": "/d/wordnet/3.1",
      "end": {
        "@id": "/c/en/admonition/n/wn/communication",
        "label": "admonition",
      },
      "start": {
        "@id": "/c/en/example/n/wn/communication",
        "label": "example",
      },
      "surfaceText": "[[example]] is a type of [[admonition]]",
      "weight": 2.0
    },
    {
      "@id": "/a/[/r/IsA/,/c/en/apology/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
      "@type": "Edge",
      "dataset": "/d/wordnet/3.1",
      "end": {
        "@id": "/c/en/example/n/wn/cognition",
        "label": "example",
      },
      "start": {
        "@id": "/c/en/apology/n/wn/cognition",
        "label": "apology",
      },
      "surfaceText": "[[apology]] is a type of [[example]]",
      "weight": 2.0
    },
    {
      "@id": "/a/[/r/IsA/,/c/en/specimen/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
      "@type": "Edge",
      "dataset": "/d/wordnet/3.1",
      "end": {
        "@id": "/c/en/example/n/wn/cognition",
        "label": "example",
      },
      "start": {
        "@id": "/c/en/specimen/n/wn/cognition",
        "label": "specimen",
      },
      "surfaceText": "[[specimen]] is a type of [[example]]",
      "weight": 2.0
    },
    {
      "@id": "/a/[/r/IsA/,/c/en/precedent/n/wn/cognition/,/c/en/example/n/wn/cognition/]",
      "@type": "Edge",
      "dataset": "/d/wordnet/3.1",
      "end": {
        "@id": "/c/en/example/n/wn/cognition",
        "label": "example",
      },
      "start": {
        "@id": "/c/en/precedent/n/wn/cognition",
        "label": "precedent",
      },
      "surfaceText": "[[precedent]] is a type of [[example]]",
      "weight": 2.0
    },
    {
      "@id": "/a/[/r/IsA/,/c/en/example/n/wp/musician/,/c/en/musical_artist/n/]",
      "@type": "Edge",
      "dataset": "/d/dbpedia/en",
      "end": {
        "@id": "/c/en/musical_artist/n",
        "label": "musical artist",
      },
      "start": {
        "@id": "/c/en/example/n/wp/musician",
        "label": "example",
        "language": "en",
      },
      "surfaceText": null,
      "weight": 0.5
    }
  ]
}
