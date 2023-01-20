pipeline {
    agent any

    tools {nodejs "node"}

    stages {

        stage('Build') {
            steps {
                git 'https://github.com/PROFLOUS/cinema-server.git'
            }
        }

        stage('Test') {
            steps {

            }
        }

        script('Deploy') {
            steps {
                
            }
        }
    }
}