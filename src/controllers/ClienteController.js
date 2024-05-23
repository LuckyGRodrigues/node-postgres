import Cliente from "../models/Cliente";

const get = async (req, res) => {
    try {
        const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

        if (!id){
            const response = await Cliente.findAll({
                order: [['id', 'asc']],
            });
            return res.status(200).send({
                message: 'Dados Encontrados!',
                response,
            });
        } 
        const response = await Cliente.findOne({
            where:{
                id,
            }
        })
        return res.status(200).send({
            message: 'Dados Encontrados!',
            response,
        });

    } catch (error) {
        return res.status(500).send({
            message: 'Ops!',
            response: error.message,
        });
    }
}

const create = async (req, res) => {
    try {
        const { nome } = req.body;
        const { telefone } = req.body;

        const response = await Cliente.create({
            nome,
            telefone,
        },);
        return res.status(201).send({
            message: 'Dados Criados!',
            response,
        });
        
    } catch (error) {
        return res.status(500).send({
            message: 'Ops!',
            response: error.message,
        }); 
    }
}



const update = async (req, res) => {
    try {
        const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

        if (!id){
            return res.status(400).send({
                message: 'Id não informado',
                response: [],
            });
        }

        const response = await Cliente.findOne({
            where: {
                id,
            },
        });

        if (!response) {
            return res.status(500).send({
                message: 'Id Não Encontrado na Base',
                response: [],
            }); 
        }

        Object.keys(req.body).forEach((chave) => 
            {response[chave] = req.body[chave]
        });

        await response.save();
        return res.status(201).send({
            message: 'Dados Atualizados',
            response,
        }); 

    } catch (error) {
        return res.status(500).send({
            message: 'Ops!',
            response: error.message,
        }); 
    }
}

const destroy = async (req, res) => {
    try {
        const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

        if (!id){
            return res.status(400).send({
                message: 'Id não informado',
                response: [],
            });
        }

        const response = await Cliente.findOne({
            where: {
                id,
            },
        });

        if (!response) {
            return res.status(500).send({
                message: 'Id Não Encontrado na Base',
                response: [],
            }); 
        }

        await response.destroy();

    } catch (error) {
        return res.status(500).send({
            message: 'Ops!',
            response: error.message,
        }); 
    }
}

export default {
    get,
    create,
    update,
    destroy,
};