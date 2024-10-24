pipeline {
    agent any

     stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh 'cp -r ./* /var/www/jenkins-pipeline-repository'
                }
            }
        }
    }
}
