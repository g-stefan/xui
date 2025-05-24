// Created by Grigore Stefan <g_stefan@yahoo.com>
// Public domain (Unlicense) <http://unlicense.org>
// SPDX-FileCopyrightText: 2023-2025 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: Unlicense

messageAction("make [" + Project.name + ".tailwind]");

// ---

runInPath("temp", function() {
	if (!Shell.directoryExists("node_modules")) {
		exitIf(Shell.system("7z x -aoa ../archive/vendor.7z"));
	};
});

// ---

Shell.copy("source/app.css", "temp/app.css");
runInPath("temp", function() {
	Shell.system("npx @tailwindcss/cli -i ./app.css -o ../output/app.min.css --minify");
});

// ---
Shell.copy("source/dashboard/dashboard-theme-2/xui.dashboard.theme-2.css", "temp/xui.dashboard.theme-2.css");
runInPath("temp", function() {
	Shell.system("npx @tailwindcss/cli -i ./xui.dashboard.theme-2.css -o ../output/release/xui.dashboard.theme-2.min.css --minify");
});

// ---
Shell.copy("source/dashboard/dashboard-theme-3/xui.dashboard.theme-3.css", "temp/xui.dashboard.theme-3.css");
runInPath("temp", function() {
	Shell.system("npx @tailwindcss/cli -i ./xui.dashboard.theme-3.css -o ../output/release/xui.dashboard.theme-3.min.css --minify");
});

