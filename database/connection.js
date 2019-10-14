const Sequelize = require('sequelize');
const bitcoin = require('./model/bitcoin');

const sequelize = new Sequelize(
             // 데이터베이스 이름
            // 유저 명
              // 비밀번
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

const result = {
    Sequelize,
    sequelize,
    bitcoin: bitcoin(sequelize)
}

module.exports = result;
