pipeline {
    agent any
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
            success {
                slackSend color: "good", message: "Success build for ${BUILD_ID} \
                Live link : https://gallery--1.herokuapp.com/ \
                Repository link : https://github.com/Abdihakim-Muhumed/gallery-1.git"
            }
            failure {
                slackSend color: "danger", message: "Build for ${BUILD_ID} failed"
            }
        }
}