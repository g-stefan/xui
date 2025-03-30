// Created by Grigore Stefan <g_stefan@yahoo.com>
// Public domain (Unlicense) <http://unlicense.org>
// SPDX-FileCopyrightText: 2023-2025 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: Unlicense

messageAction("make [" + Project.name + ".bundle]");

// ---

exitIf(Shell.system("php source/theme/colors.generator.php > temp/xui.bundle.colors.css"));

bundleCSS="";
bundleCSS+=Shell.fileGetContents("temp/xui.core.header.css");
bundleCSS+="\r\n";
bundleCSS+=Shell.fileGetContents("source/theme/fonts.css");
bundleCSS+="\r\n";
bundleCSS+=Shell.fileGetContents("temp/xui.bundle.colors.css");
bundleCSS+=Shell.fileGetContents("source/theme/colors.css");
bundleCSS+="\r\n";
bundleCSS+="@layer components {\r\n";
bundleCSS+=Shell.fileGetContents("temp/xui.complete.min.css");
bundleCSS+="}\r\n";
Shell.filePutContents("temp/xui.bundle.css",bundleCSS);
Shell.filePutContents("output/release/xui.bundle.css",bundleCSS);

// ---
