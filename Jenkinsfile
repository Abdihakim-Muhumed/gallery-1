pipeline {
    agent any
    environment {

        EMAIL_BODY = 

        """

            <p>EXECUTED: Job <b>\'${env.JOB_NAME}:${env.BUILD_NUMBER})\'</b></p>

            <p>

            View console output at 

            "<a href="${env.BUILD_URL}">${env.JOB_NAME}:${env.BUILD_NUMBER}</a>"

            </p> 

            <p><i>(Build log is attached.)</i></p>

        """

        EMAIL_SUBJECT_SUCCESS = "Status: 'SUCCESS' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'" 

        EMAIL_SUBJECT_FAILURE = "Status: 'FAILURE' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'" 

        EMAIL_RECEPIENT = 'abdihakim.muhumed@student.moringaschool.com'

    }
    tools {
        nodejs 'NodeJS'
    }
    stages {
        stage ('Clone repository') {
            steps {
                git 'https://github.com/Abdihakim-Muhumed/gallery-1.git'   
            }
        }
        stage ('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage ('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy to Heroku') {
            steps{
                withCredentials([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU_CREDENTIALS')]){
                    sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/gallery--1.git'
                }
            }
        }
    }
    post {
            success('Sending success notification') {
                slackSend color: "good", message: "Success build for ${BUILD_ID} \
                Live link : https://gallery--1.herokuapp.com/ \
                Repository link : https://github.com/Abdihakim-Muhumed/gallery-1.git"

                emailext attachLog: true, 
                body: EMAIL_BODY, 

                subject: EMAIL_SUBJECT_SUCCESS,

                to: EMAIL_RECEPIENT
            }
            failure {
                slackSend color: "danger", message: "Build for ${BUILD_ID} failed"
                emailext attachLog: true, 
                body: EMAIL_BODY, 

                subject: EMAIL_SUBJECT_FAILURE, 

                to: EMAIL_RECEPIENT
            }
        }
}