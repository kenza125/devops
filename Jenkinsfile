pipeline {
    agent any

    stages {
        stage('Checkout GIT') {
            steps {
                checkout scm
            }
        }
        stage('Compilation') {
            steps {
                sh 'mvn clean compile'
            }
        }
        stage('Tests unitaires') {
            steps {
                sh 'mvn test'
            }
        }
        stage('Package') {
            steps {
                sh 'mvn package -DskipTests'
            }
        }
    }
}
