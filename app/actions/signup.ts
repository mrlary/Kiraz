'use server'

import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function signUp(prevState: any, formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  // Basit doğrulamalar
  if (!name || !email || !password) {
    return { error: 'Lütfen tüm alanları doldurun.' }
  }

  if (password.length < 6) {
    return { error: 'Şifre en az 6 karakter olmalıdır.' }
  }

  try {
    // 1. Bu e-posta ile daha önce kayıt olunmuş mu?
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return { error: 'Bu e-posta adresi zaten kullanımda.' }
    }

    // 2. Şifreyi şifrele (hash'le)
    const hashedPassword = await bcrypt.hash(password, 10)

    // 3. Veritabanına kaydet
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })

    return { success: 'Kayıt başarıyla tamamlandı! Giriş yapabilirsiniz.' }
  } catch (error) {
    return { error: 'Bir hata oluştu. Lütfen tekrar deneyin.' }
  }
}