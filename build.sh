#!/bin/sh

# Exit if any command fails
set -e

DEPRECATED_TAG="deprecated"
if [ ! -e .cache  ]; then
  echo "Clean build: Deprecating old assets on Loco"
  DEPRECATE_TRANSLATIONS_ON_CLEAN_BUILD="tag-absent=${DEPRECATED_TAG}"
fi

ledgistats=$(curl --fail --header "Authorization:${LEDGISTATS_API_TOKEN}" ${DEPLOY_PRIME_URL}/.netlify/functions/ledgistats) && echo "${ledgistats}" > src/helpers/ledgistats.json

./getTranslations.sh

npm rebuild sharp node-sass
gatsby build --log-pages


if [ "$BRANCH" = "master" ]; then
  npm run extract
  cd src/locale/en
  cat dynamic.po >> messages.po
  curl -u ${LOCO_KEY_REBRANDING}: --data-binary @messages.po "https://localise.biz/api/import/po?untag-all=${DEPRECATED_TAG}&${DEPRECATE_TRANSLATIONS_ON_CLEAN_BUILD}"
fi
