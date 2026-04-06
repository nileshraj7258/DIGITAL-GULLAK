const addBtn = document.getElementById('add-btn');
const container = document.getElementById('product-list-container');

// प्लस बटन दबाने पर क्या होगा:
addBtn.addEventListener('click', () => {
    const newCard = `
        <div class="input-card">
            <div class="photo-box">
                <i class="fas fa-camera"></i>
                <span>Photo चुनें</span>
            </div>
            <input type="text" placeholder="प्रोडक्ट का नाम">
            <input type="number" placeholder="कीमत (₹)">
            <select>
                <option value="kg">Kg</option>
                <option value="L">Litre</option>
                <option value="pkt">Packet</option>
            </select>
            <button onclick="this.parentElement.remove()" style="width:100%; margin-top:10px; background:#ff5722; color:white; border:none; padding:10px; border-radius:8px; font-weight:bold;">
                <i class="fas fa-trash"></i> हटाएँ (Delete)
            </button>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', newCard);
});
