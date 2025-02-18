from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from sqlalchemy import text
from dotenv import load_dotenv
import os
from config import Config

# .env 파일 로드
load_dotenv()

def create_app():
    app = Flask(__name__)

    # 🔹 CORS 설정 추가 (모든 도메인 허용 & 쿠키 포함 가능)
    CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

    # 환경 변수 설정 적용
    app.config.from_object(Config)

    # 환경 변수에서 DB 및 JWT 설정 가져오기
    app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL")
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY")

    # DB, 마이그레이션 및 JWT 설정
    from models import db, User
    db.init_app(app)  # 여기서 Flask 앱과 DB 연결
    Migrate(app, db)
    JWTManager(app)

    # 클라우드 데이터베이스 연결 확인
    try:
        with app.app_context():
            db.session.execute(text("SELECT 1"))
        print("\n-----------------------------------")
        print("\n✅ Database connected successfully!")
        print("🌍 The service is now operating with an Azure MySQL database.")
        print(f"Database URL={os.getenv("DATABASE_URL")}\n")
        print("-----------------------------------")
    except Exception as e:
        print(f"❌ Database connection failed: {e}")

    # 블루프린트 등록 (여기에 추가!)
    from routes.auth import auth_bp
    app.register_blueprint(auth_bp, url_prefix='/auth')

    # App route
    @app.route("/")
    def home():
        return "Flask backend is running"

    return app

app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
