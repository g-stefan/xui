// Created by Grigore Stefan <g_stefan@yahoo.com>
// Public domain (Unlicense) <http://unlicense.org>
// SPDX-FileCopyrightText: 2023 Grigore Stefan <g_stefan@yahoo.com>
// SPDX-License-Identifier: Unlicense

messageAction("update [" + Project.name + "]");

var version = getVersion();

if (version == Project.previousVersion) {
	return;
};

var previousRelease = Project.name + "-" + Project.previousVersion + ".7z";
var currentRelease = Project.name + "-" + version + ".7z";

if (!Shell.fileExists("release/" + previousRelease)) {
	return;
};

if (!Shell.fileExists("release/" + currentRelease)) {
	return;
};

Shell.removeDirRecursivelyForce("temp");
Shell.mkdirRecursivelyIfNotExists("temp");

var updateRelease = Project.name + "-update-" + Project.previousVersion + "-to-" + version + ".7z";
if (Shell.fileExists("release/" + updateRelease)) {
	Shell.remove("release/" + updateRelease);
};

exitIf(Shell.system("7zr x \"release/" + previousRelease + "\" -otemp/" + Project.name + "-" + Project.previousVersion));
exitIf(Shell.system("7zr x \"release/" + currentRelease + "\" -otemp/" + Project.name + "-" + version));

function getFileListHash(list) {
	var retV={};
	for(file of list) {
		retv[file]=SHA512.hash(Shell.fileGetContents(file));	
	};
	return $retV;
};

runInPath("temp", function() {
	var pathBase=Project.name;
	var versionLast=Project.previousVersion;
	var versionLatest=version;

	var pathLast=pathBase+"-"+$versionLast;
	var athLatest=pathBase+"-"+$versionLatest;

	if(!Shell.directoryExists(pathLast)){		
		exit(1,"Error: directory "+pathLast+" not found!");
	};
	
	if(!Shell.directoryExists(pathLatest)){
		exit(1,"Error: directory "+pathLatest+" not found!");		
	};
	
	var lastFileList=Shell.getFileList(pathLast+"/*");
	var latestFileList=Shell.getFileList(pathLatest+"/*");
	var lastFileListHash=getFileListHash(lastFileList);
	var latestFileListHash=getFileListHash(latestFileList);

	// ****************

	var modifiedFiles = {};
	for(file in lastFileListHash) {
		if(!Script.isNil(latestFileListHash[file])){
			if(lastFileListHash[file]!=latestFileListHash[file]){
				modifiedFiles[file]=true;
			};
		};
	};

	//exitIf(Shell.system("php ../fabricare/update.php \"" + Project.name + "\" \"" + Project.previousVersion + "\" \"" + version + "\""));
	exitIf(Shell.system("7zr a -mx9 -mmt4 -r- -sse -w. -y -t7z ../release/" + updateRelease + " " + Project.name + "-update-" + Project.previousVersion + "-to-" + version));
});

Shell.removeDirRecursivelyForce("temp");
