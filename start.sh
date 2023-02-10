#!/bin/sh
PORT="${PORT:-8000}"
HOST="${HOST:-localhost}"

./getTranslations.sh
gatsby develop --port ${PORT} --host ${HOST}
