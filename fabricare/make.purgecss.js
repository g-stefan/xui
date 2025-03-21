// Created by Grigore Stefan <g_stefan@yahoo.com>
// Public domain (Unlicense) <http://unlicense.org>
// SPDX-FileCopyrightText: 2023-2024 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: Unlicense

messageAction("make [" + Project.name + ".purgecss]");

// ---

runInPath("temp", function() {
	if (!Shell.directoryExists("node_modules")) {
		exitIf(Shell.system("7z x -aoa ../archive/vendor.7z"));
	};
});

// ---

Shell.remove("output/app.min.css");
Shell.copy("temp/app.tailwind.min.css","temp/app.min.css");
runInPath("temp", function() {
	Shell.system("npx purgecss --css ./app.min.css --content ../output/**/*.html ../output/**/*.js --output ../output");
});

// ---
