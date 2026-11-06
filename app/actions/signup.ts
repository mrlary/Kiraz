'use server'

import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function signUp(prevState: any, formData: FormData) {
  const username = formData.get('username') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const role = formData.get('role') as string || 'USER' // Seçilmezse varsayılan USER

  if (!username || !email || !password) {
    return { error: 'Lütfen tüm alanları doldurun.' }
  }

  if (password.length < 6) {
    return { error: 'Şifre en az 6 karakter olmalıdır.' }
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return { error: 'Bu e-posta adresi zaten kullanımda.' }
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    // Veritabanına rolü de ekliyoruz
    await prisma.user.create({
      data: {
        name: username,
        email,
        password: hashedPassword,
        role,
      },
    })

    return { success: 'Kayıt başarıyla tamamlandı! Artık giriş yapabilirsiniz.' }
  } catch (error: any) {
    console.error("Kayıt Hatası:", error)
    return { error: 'Bir veritabanı hatası oluştu.' }
  }
}