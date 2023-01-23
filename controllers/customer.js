const {where} = require("sequelize");
const CarModel = require("../models").CarModel
const CarInsuranceId = require("../models").CarInsuranceId
const CustomerInsurance = require("../models").CustomerInsurance
const Customer = require("../models").Customer
const CarClaim = require("../models").CarClaim
const CarInsuranceType = require("../models").CarInsuranceType
const LocationId = require("../models").LocationId;
const RiskPersonal = require("../models").RiskPersonal
const RiskLocalization = require("../models").RiskLocalization
const bcrypt = require("bcryptjs");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const {decode} = require("jsonwebtoken");
const User = require("../models").Customer
const getCarinsuranceType = async (req, res) => {
    try {
        await CarInsuranceType.findAll({
            // attributes: ["name", "id", "img", "price"],
        }).then((fruit) => {
            console.log(fruit)
            res.json(fruit);
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({message: "Menuitem not found."});
    }
};
const getCarInsuranceId = async (req, res) => {
    try {
        await CarInsuranceId.findAll({
            // attributes: ["name", "id", "img", "price"],
        }).then((fruit) => {
            console.log(fruit)
            res.json(fruit);
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({message: "Menuitem not found."});
    }
};
// const getCarModel= async (req, res) => {
//     try {
//         await CarModel.findAll({
//             attributes: ["brand"],
//         }).then((array) => {
//             var resArr = [];
//             array.filter(function(item){
//                 var i = resArr.findIndex(x => (x.brand == item.brand));
//                 if(i <= -1){
//                     resArr.push(item);
//                 }
//                 return null;
//             });
//             res.json(resArr);
//
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500).send({ message: "Menuitem not found." });
//     }
// };
const getCarYear = async (req, res) => {
    try {
        await CarModel.findAll({
            attributes: ["year"],
        }).then((array) => {
            var resArr = [];
            array.filter(function (item) {
                var i = resArr.findIndex(x => (x.year == item.year));
                if (i <= -1) {
                    resArr.push(item);
                }
                return null;
            });
            res.json(resArr);

        });
    } catch (err) {
        console.log(err);
        res.status(500).send({message: "Menuitem not found."});
    }
};
const getCarBrand = async (req, res) => {
    try {
        await CarModel.findAll({
            attributes: ["brand"],
            where: {year: req.params.year}
        }).then((array) => {
            console.log(array)
            var resArr = [];
            array.filter(function (item) {
                var i = resArr.findIndex(x => (x.brand == item.brand));
                if (i <= -1) {
                    resArr.push(item);
                }
                return null;
            });
            res.json(resArr);

        });
    } catch (err) {
        console.log(err);
        res.status(500).send({message: "Menuitem not found."});
    }
};
const getCarModel = async (req, res) => {
    try {
        await CarModel.findAll({
            attributes: ["model"],
            where: {year: req.params.year, brand: req.params.brand}
        }).then((array) => {
            res.json(array);

        });
    } catch (err) {
        console.log(err);
        res.status(500).send({message: "Menuitem not found."});
    }
};
const getLocation = async (req, res) => {
    try {
        await LocationId.findAll({
            // attributes: ["name", "id", "img", "price"],
        }).then((fruit) => {
            console.log(fruit)
            res.json(fruit);
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({message: "Menuitem not found."});
    }
};
const getCustomer = async (req, res) => {
    try {
        await Customer.findAll({
            // attributes: ["name", "id", "img", "price"],
        }).then((fruit) => {
            console.log(fruit)
            res.json(fruit);
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({message: "Menuitem not found."});
    }
};
const getCarClaim = async (req, res) => {
    try {
        await CarClaim.findAll({
            // attributes: ["name", "id", "img", "price"],
        }).then((fruit) => {
            console.log(fruit)
            res.json(fruit);
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({message: "Menuitem not found."});
    }
};
const getCustomerInsurance = async (req, res) => {
    try {
        await CustomerInsurance.findAll({
            // attributes: ["name", "id", "img", "price"],
        }).then((fruit) => {
            console.log(fruit)
            res.json(fruit);
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({message: "Menuitem not found."});
    }
};
const signup = async (req, res) => {
    await User.findAndCountAll({
        where: {
            username: req.body.username,
        },
    }).then((find) => {
        console.log(find)
        if (find.count != 0) {
            console.log("has user")
            return res.status(201).json({status: "Username has taken"});
        } else {
            bcrypt.genSalt(10, (err, salt) => {
                if (err) return res.status(500).json(err);

                bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
                    if (err) return res.status(500).json(err);
                    req.body.password = hashedPwd;
                    User.create(req.body)
                        .then((newUser) => {
                            const token = jwt.sign(
                                {
                                    username: newUser.username,
                                    id: newUser.id,
                                },
                                process.env.JWT_SECRET,
                                {
                                    expiresIn: "30 days",
                                }
                            );
                            User.findOne({
                                where: {username: req.body.username}
                            }).then((fruit) => {
                                RiskPersonal.create({
                                    countryId: 66,
                                    value: Math.round(Math.random() * -10),
                                    year: 2018,
                                    customerId: fruit.id,
                                })
                                RiskPersonal.create({
                                    countryId: 66,
                                    value: Math.round(Math.random() * -10),
                                    year: 2019,
                                    customerId: fruit.id,
                                })
                                RiskPersonal.create({
                                    countryId: 66,
                                    value: Math.round(Math.random() * -10),
                                    year: 2020,
                                    customerId: fruit.id,
                                })
                                RiskPersonal.create({
                                    countryId: 66,
                                    value: Math.round(Math.random() * -10),
                                    year: 2021,
                                    customerId: fruit.id,
                                })
                                RiskPersonal.create({
                                    countryId: 66,
                                    value: Math.round(Math.random() * -10),
                                    year: 2022,
                                    customerId: fruit.id,
                                })
                                RiskPersonal.create({
                                    countryId: 66,
                                    value: Math.round(Math.random() * -10),
                                    year: 2023,
                                    customerId: fruit.id,
                                })
                            });
                            // res.cookie("jwt", token)
                            res.status(200).json({status: "signUp"});
                        })
                        .catch((err) => {
                            res.send(`error ${err}`);
                        });
                })
            })
        }
    })
};

const login = (req, res) => {
    try {
        User.findOne({
            where: {
                username: req.body.username,
            },
        })
            .then((foundUser) => {
                // console.log(foundUser)
                if (foundUser) {
                    bcrypt.compare(
                        req.body.password,
                        foundUser.password,
                        (err, match) => {
                            if (match) {
                                const token = jwt.sign(
                                    {
                                        username: foundUser.username,
                                        id: foundUser.id,
                                    },
                                    process.env.JWT_SECRET,
                                    {
                                        expiresIn: "30 days",
                                    }
                                );

                                res.cookie("jwt", token);
                                res.json(token);
                            } else {
                                return res.sendStatus(400);
                            }
                        }
                    );
                } else {
                    return res.sendStatus(400);
                }
            })
            .catch((e) => {
                return res.sendStatus(500);
            });
    } catch (e) {
        return res.sendStatus(500);
    }
};
const verify = (req, res) => {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
    }
    jwt.verify(req.token, process.env.JWT_SECRET, (err, decodedUser) => {
        if (err || !decodedUser) {
            return res.status(401).json({status: "Unauthorized Request"});
        } else {
            return res.status(200).json({status: "authorized Request"});
        }
    });
};
const test = (req, res) => {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
    }

    jwt.verify(req.token, process.env.JWT_SECRET, (err, decodedUser) => {
        if (err || !decodedUser)
            return res.status(401).json({error: "Unauthorized Request"});

        req.user = decodedUser;
        User.findOne({where: {username: decodedUser.username}}).then((resu) => {
            console.log(resu)
            res.json({
                username: resu.username,
                email: resu.email,
                phone: resu.phone,
                firstname: resu.firstname,
                lastname: resu.lastname,
            });
        });
    });
};
const edit = (req, res) => {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
    }

    jwt.verify(req.token, process.env.JWT_SECRET, (err, decodedUser) => {
        if (err || !decodedUser)
            return res.status(401).json({error: "Unauthorized Request"});

        req.user = decodedUser;
        return res.json("ok");
    });
    if (req.body.password !== "") {
        bcrypt.genSalt(10, (err, salt) => {
            if (err) return res.status(500);

            bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
                if (err) return res.status(500);
                User.update(
                    {
                        username: req.body.username,
                        password: hashedPwd,
                        email: req.body.email,
                        phone: req.body.phone,
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                    },
                    {
                        where: {username: req.user.username},
                    }
                ).then((r) => {
                });
            });
        });
    } else {
        User.update(
            {
                username: req.body.username,
                email: req.body.email,
                phone: req.body.phone,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
            },
            {
                where: {username: req.user.username},
            }
        ).then((r) => {
        });
    }
};
const deleteUser = async (req, res) => {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
    }

    jwt.verify(req.token, process.env.JWT_SECRET, (err, decodedUser) => {
        if (err || !decodedUser)
            return res.status(401).json({error: "Unauthorized Request"});

        req.user = decodedUser;
        User.destroy({where: {id: decodedUser.id}});
    });
};
const newInsure = (req, res) => {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
    }
    jwt.verify(req.token, process.env.JWT_SECRET, (err, decodedUser) => {
        req.body.customerId = decodedUser.id
        console.log(decodedUser)
        CarModel.findOne({where:{
                brand:req.body.brand,
                model:req.body.model,
                year:req.body.year
            }}).then(car=>{
            console.log(car)
            CarInsuranceId.findOne({where:{
                    carModelId:car.id,
                    carInsuranceTypeId:req.body.type
                }}).then(insure=>{
                    let discount = (1-(0.3*Math.random()))
                CustomerInsurance.create({
                    customerId:req.body.customerId,
                    insuranceId:insure.id,
                    insuranceType:parseInt(req.body.type),
                    priceFinal:Math.round(insure.price*discount),
                    status:"Active",
                    riskPersonalId:1,
                    riskLocalizationId:1,
                    startDate:new Date(),
                    endDate:new Date(),
                    plate:req.body.plate,
                    province:req.body.province,
                })
                    .then((insur) => {
                        res.status(200).json({price: insure.price,discount:discount});
                    })
                    .catch((err) => {
                        console.log(err)
                        res.send(`error ${err}`);
                    });
            })
        })


    });


};
const dashboardData=(req,res)=>{
    user={}
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
    }

    jwt.verify(req.token, process.env.JWT_SECRET, (err, decodedUser) => {
        if (err || !decodedUser)
            return res.status(401).json({error: "Unauthorized Request"});

        user = decodedUser;
        console.log(user)
    });

        CustomerInsurance.findAll({
            where:{customerId:user.id},
            attributes:['id','insuranceId','insuranceType','priceFinal','plate','province','endDate']
        }).then(insure=> {
            res.json(insure)
        })


}
const claim=(req,res)=>{
    user={}
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
    }

    jwt.verify(req.token, process.env.JWT_SECRET, (err, decodedUser) => {
        if (err || !decodedUser)
            return res.status(401).json({error: "Unauthorized Request"});

        user = decodedUser;
        console.log(user)
    });
    CarClaim.findAll({where:{customerId:user.id}}).then(claim=>{
        res.json(claim)
    })
}
module.exports = {

    getCarinsuranceType,
    getCarInsuranceId,
    getCarModel,
    getLocation,
    getCarClaim,
    getCustomerInsurance,
    getCustomer,
    signup,
    login,
    verify,
    test,
    edit,
    deleteUser,
    getCarYear,
    getCarBrand,
    newInsure,
    dashboardData,
    claim,
};


