const Sequelize = require('sequelize');


const sequelize = new Sequelize(
    "mrjo",              // 데이터베이스 이름
    "sago",          // 유저 명
    "sagosagosago",          // 비밀번호
    {
        'host': "sago.c6mnzwpnzomg.ap-northeast-2.rds.amazonaws.com",
        'dialect': 'mysql'
    }
);

sequelize.authenticate()



    .then(() => {
        console.log('DB연결 성공');
    }).catch((err) => {
    if (err) {
        console.log('DB연결 실패');
        console.log(err);
    }
});


sequelize.sync({force:true});

module.exports = sequelize;