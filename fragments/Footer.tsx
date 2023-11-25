export const Footer = () => {
  return (
    <footer className="w-full flex">
      <div className="max-w-7xl py-10 w-full m-auto flex justify-start items-center max-sm:gap-4 max-sm:flex-wrap-reverse">
        <div className="bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 bg-clip-text text-transparent font-bold px-5">
          <p>
            Feito com muito <span className="text-red-500">&hearts;</span> para
            a escritora Raquel Teixeira
          </p>
          <span>&copy; Todos os direitos reservados - Lucas Leão</span>
        </div>
      </div>
    </footer>
  );
};
