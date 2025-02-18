from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from datetime import timedelta
from models import db, User

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')  # 👉 email 필드 추가

    if not username or not password or not email: 
        return jsonify({"error": "Username, password, and email are required"}), 400

    hashed_password = generate_password_hash(password)

    new_user = User(username=username, password=hashed_password, email=email) 
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User registered successfully!"}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"error": "Email and password required"}), 400

    user = User.query.filter_by(email=email).first()
    if not user or not check_password_hash(user.password, password):
        return jsonify({"error": "Invalid email or password"}), 401

    access_token = create_access_token(identity=str(user.id), expires_delta=timedelta(hours=1))
    return jsonify({"message": "Login successful", "access_token": access_token}), 200

@auth_bp.route('/logout', methods=['POST'])
@jwt_required()  # JWT가 필요함 (유효한 토큰이 있어야 로그아웃 가능)
def logout():
    user_id = get_jwt_identity()
    print(f"Logging out user: {user_id}")
    return jsonify({"message": "Logged out successfully"}), 200 

@auth_bp.route('/user', methods=['GET'])
@jwt_required()  # ✅ JWT 인증 필요
def get_users():
    users = User.query.with_entities(User.id, User.username.label("name"), User.bio, User.question_count).all()

    user_list = [
        {"id": user.id, "name": user.name, "bio": user.bio, "question_count": user.question_count}
        for user in users
    ]
    
    return jsonify(user_list), 200