#!/bin/bash
project=$1
yarn global add firebase-tools
firebase deploy --project $1 --token $FIREBASE_TOKEN -m "build $TRAVIS_BUILD_ID, commit $TRAVIS_COMMIT" --non-interactive
