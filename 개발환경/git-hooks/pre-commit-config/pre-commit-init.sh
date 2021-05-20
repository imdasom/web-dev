#!/usr/bin/bash

#check java path
#printf "\ncheck path"

javapath=`type -p java`
if [ "${javapath}" ]; then
	printf "check path JAVA_HOME [DONE]\n"
else
	printf "check path JAVA_HOME [FAIL]\n"
	printf "pre-commit-init [FAIL]\n"
	exit -1;
fi

#move project root
cd ../../..

#add new config
#printf "\nreset git config\n"
git config --unset checkstyle.jar
git config --unset checkstyle.checkfile
git config --unset checkstyle.project-root

root=$PWD
config=$PWD/.git/hooks/pre-commit-config
git config --add checkstyle.project-root $root
#printf "\n\tcheckstyle.project-root [DONE]"
git config --add checkstyle.jar $config/diff-checkstyle.jar
#printf "\n\tcheckstyle.jar [DONE]"
git config --add checkstyle.checkfile $config/google_checks.portal.xml
#printf "\n\tcheckstyle.checkfile [DONE]"

printf "pre-commit-init [DONE]\n"
exit 0;
