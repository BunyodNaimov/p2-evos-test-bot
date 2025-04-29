from aiogram.types import ReplyKeyboardMarkup, KeyboardButton
from messages import messages


def about_company_btn(lang):
    about_company = ReplyKeyboardMarkup(keyboard=[
        [KeyboardButton(text=f"{messages[lang]['about_company']}")]

    ], resize_keyboard=True)
    return about_company
