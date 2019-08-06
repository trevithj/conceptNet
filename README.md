# Project notes

## Running

The project was developed using the following setup:

- `node v8.10.0`
- `yarn version 1.17.3`
- `npm verison 3.5.2`

To run the project:

- `node concept-net.js` will display basic usage information.
- `node concept-net.js "search term here"` performs a tier1 search in the fixed Data structure.
- `node concept-net.js "search me" tier2` will call the live api, to a maximum level of three deep. Only the highest-weighted path is processed.

## Notes and assumptions

The tier1 code assumes that the longest path represented the 'most general' concept. Shorter paths are ignored, except if they branch off this main path.

The tier2 code follows the highest weighted edge, and so only creates a single path. The process is hard-coded to only look three deep, and makes no tests for circularity.

# Task Scope

## Overview

Utilising ConceptNet, create a hierarchical JSON structure with all the query term’s English language parent (IsA) concepts. The parent-child hierarchy should be ordered from the most general concept to the most specific with multiple children, as necessary.

## Tier 1

Instead of calling the real ConceptNet API, use the `“Data.js”` file from the github repo above as an external module to look up results for each term using the public method in the class. Minimise the number of calls to the module in preparation for the next tiers.

## Tier 2

Query the real ConceptNet API. Figure out how to call the API from the online documentation.

- Don't block on IO operations (ensure any waiting is handled by the platform's asynchronous subsystems rather than by spinning the CPU)
- Create a parameter to optionally allow switching to the Tier 1 module as the data source

## Tier 3

ConceptNet will block the app if it exceeds a certain number of API calls per second. Add appropriate functionality to the app to prevent it getting blocked for excessive query load.

## Tier 4

Query a broader range of parent concepts by adding the ability to set the `limit=70` parameter on the API with a number set by the user. This parameter should make the app fetch a larger number of parent concepts for each term. Also set a threshold to stop calling the API after a reasonable number of parents have been returned, so the app doesn't chain queries forever.
