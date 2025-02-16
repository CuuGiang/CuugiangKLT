export default function handler(req, res) {
    if (req.method === 'POST') {
        console.log(req.body); // Kiểm tra dữ liệu gửi đến từ Zalo OA
        // Xử lý dữ liệu tại đây (nếu cần)
        res.status(200).send('OK'); // Trả về HTTP 200 OK
    } else {
        // Nếu phương thức không phải POST, trả về lỗi
        res.status(405).send('Method Not Allowed');
    }
}
