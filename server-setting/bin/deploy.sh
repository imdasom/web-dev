#!/bin/bash
HOME=/home/ec2-user/my-web-service
DEPLOY_HOME=$HOME/deploy/FactPL-Backend/build/libs
BIN_HOME=$HOME/bin
WAS_HOME=$HOME/was
BACKUP_HOME=$HOME/backup
JAR_NAME='my-web-service.jar'

echo "> [api-backoffice] 현재 구동중인 애플리케이션 pid 확인"
CURRENT_PID=$(pgrep -f $JAR_NAME)
echo "$CURRENT_PID"
if [ -z $CURRENT_PID ]; then

        echo "> 현재 구동중인 애플리케이션이 없으므로 종료하지 않습니다."
else
        echo "> kill -2 $CURRENT_PID"
        kill -9 $CURRENT_PID
        sleep 5
fi

echo "> 기존 jar 백업"
DATE=$(date +'%Y%m%d')
cp $WAS_HOME/$JAR_NAME $BACKUP_HOME/$JAR_NAME.$DATE

echo "> 새 어플리케이션 was로 이동"
cp $DEPLOY_HOME/$JAR_NAME $WAS_HOME/$JAR_NAME

echo "> 서비스를 시작합니다. JAR Name: $JAR_NAME"
sh $BIN_HOME/start.sh
