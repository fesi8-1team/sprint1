import Greet from "@/app/auth/Greet";

export default function RegisterPage() {
  return (
    //네브바 높이 감안한 pt-16
    <div className="w-full pt-16 text-center">
      <h1 className={`sr-only`}>회원 가입 페이지임</h1>
      <div className={`mt-7 flex flex-col md:flex-row`}>
        {/*텍스트 제목과 이미지 섹션*/}
        <Greet />
        {/*회원가입 폼 랜더*/}
        <section>
          <RegisterForm />
        </section>
      </div>
    </div>
  );
}
