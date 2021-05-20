#!/bin/bash
HOME=/home/ec2-user/my-web-service
WAS_HOME=$HOME/was
CFG_HOME=$HOME/cfg
LOG_HOME=$HOME/logs
JAR_NAME=my-web-service.jar

nohup java -jar -Dlogback.configurationFile=$CFG_HOME/logback.xml -Dspring.config.location=$CFG_HOME/application.properties $WAS_HOME/$JAR_NAME &
