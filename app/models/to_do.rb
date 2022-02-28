class ToDo < ApplicationRecord
    belongs_to :user
    validates :date_due, presence: true
    validates :to_do, presence: true

    def self.search param, user
        user.to_dos.where('to_do like ?', param)
    end
end
