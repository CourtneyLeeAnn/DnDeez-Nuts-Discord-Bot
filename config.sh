#!/bin/bash

# Source the .env file
set -a # automatically export all variables
source .env
set +a # stop exporting variables

# read the file into a variable
config_template=$(<template.config.json)

# substitute all placeholders with corresponding environment variables
for var in $(compgen -e); do
    config_template=${config_template//\{\{$var\}\}/${!var}}
done

# write back the processed template into config.json
echo "$config_template" > config.json