export default function Home() {
	return (
		<div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
			<main className='flex flex-col gap-[32px] row-start-2 items-center'>
				<h1 className='text-foreground decoration-border/75 text-4xl font-bold text-balance underline decoration-2 underline-offset-8'>
					Hattat Sıtkı Çoban
				</h1>
				<p className='text-center font-[family-name:var(--font-geist-mono)]'>
					Site Yapım Aşamasındadır.
				</p>
			</main>
		</div>
	);
}
