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
        stage('Deploy to Heroku') {
            steps{
                withCredentials([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU_CREDENTIALS')]){
                    sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/gallery--1.git'
                }
            }
        }
    }
}