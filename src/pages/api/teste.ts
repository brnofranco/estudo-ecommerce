const teste = {
    "produtos": [
        {
            "id": 0,
            "nome": 'bitcoin',
            "preco": 10000000
        },
        {
            "id": 1,
            "nome": 'dogecoin',
            "preco": 10000000
        }
    ],
    "estoque" : [
        {
            "id": 0,
            "quantidade": 4
        },
        {
            "id": 1,
            "quantidade": 6
        }
    ]
}

// export default function handler(req: any, res:any) {
//     if (req.method === 'POST') {
//         res.status(200).json(teste);
//     } else {
//         res.status(404);
//     }
//   }

  // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    produtos: {
        id: number;
        nome: string;
        preco: number;
    }[];
    estoque: {
        id: number;
        quantidade: number;
    }[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(teste);
}
