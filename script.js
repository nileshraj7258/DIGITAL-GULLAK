
* { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Poppins', sans-serif; }
body { background-color: #f4f7f6; color: #333; }

/* Header Design */
.header {
    background: white; padding: 15px 20px;
    display: flex; justify-content: space-between; align-items: center;
    border-bottom: 2px solid #eee; position: sticky; top: 0; z-index: 100;
}
.logo-area h1 { color: #ff9800; font-weight: 900; font-size: 24px; letter-spacing: 1px; }
.logo-area p { font-size: 10px; color: #888; text-transform: uppercase; }

.google-login-btn {
    width: 40px; height: 40px; border-radius: 50%;
    border: 1px solid #ddd; display: flex; justify-content: center; align-items: center;
    background: white; box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

/* Input Card Design */
.input-card {
    background: white; margin: 15px; padding: 15px;
    border-radius: 15px; border: 1px solid #ddd;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}
.photo-box {
    height: 120px; border: 2px dashed #bbb; border-radius: 12px;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    color: #888; background: #fafafa; margin-bottom: 12px;
}
input, select {
    width: 100%; padding: 12px; margin-top: 10px;
    border: 1px solid #eee; border-radius: 8px; font-size: 14px;
}

/* Floating Plus Button */
.plus-btn {
    position: fixed; bottom: 30px; right: 20px;
    width: 60px; height: 60px; border-radius: 50%;
    background: #4caf50; color: white; border: none;
    font-size: 30px; font-weight: bold; cursor: pointer;
    box-shadow: 0 5px 15px rgba(76, 175, 80, 0.4);
}
