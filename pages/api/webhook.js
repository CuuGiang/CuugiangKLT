export default function handler(req, res) {
    if (req.method === 'POST') {
        console.log(req.body);  // Kiểm tra dữ liệu nhận được từ Zalo OA
        res.status(200).send('OK');  // Trả về HTTP 200 OK
    } else {
        res.status(405).send('Method Not Allowed');  // Nếu không phải POST
    }
}
