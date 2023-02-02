sequelize-auto -h db-cenima.cxbtwvxbshwt.ap-southeast-1.rds.amazonaws.com -d cenima_booking_db -u admin -x mydb1234 -p 3306 -e mysql -o "C:\Users\HP\OneDrive\Tài liệu\cinema-server\src\models-v2"-t City
docker system prune -af
docker rm -f cineam || true
docker-compose up -d
