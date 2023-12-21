fx_version "cerulean"
name "FiveM TypeScript Boilerplate"
author "Project Error"
game "gta5"

dependencies {
	'/server:5848',
  '/onesync',
  'ox_lib'
}

files {
  "dist/shared/json/**/*",
  "src/ui/dist/*.html",
  "src/ui/dist/*.png",
  "src/ui/dist/manifest.json",
  "src/ui/dist/assets/*.js",
  "src/ui/dist/assets/*.css",
  "src/ui/dist/assets/**/*",
}

ui_page "src/ui/dist/index.html"

lua54 "yes"


server_scripts {
  "dist/server/**/*.js",
}

client_scripts {
  "dist/client/**/*.js",
}

