// Created by Grigore Stefan <g_stefan@yahoo.com>
// Public domain (Unlicense) <http://unlicense.org>
// SPDX-FileCopyrightText: 2023-2025 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: Unlicense

messageAction("make [" + Project.name + ".prepare]");

// ---

prepareCSS="";
prepareCSS+="@layer components {\r\n";
prepareCSS+=Shell.fileGetContents("temp/xui.dashboard-theme-2.input.css");
prepareCSS+="}\r\n";
Shell.filePutContents("temp/xui.dashboard-theme-2.prepared.css",prepareCSS);

// ---

prepareCSS="";
prepareCSS+="@layer components {\r\n";
prepareCSS+=Shell.fileGetContents("temp/xui.dashboard-theme-3.input.css");
prepareCSS+="}\r\n";
Shell.filePutContents("temp/xui.dashboard-theme-3.prepared.css",prepareCSS);

// ---
