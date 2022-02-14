class ToDo < ApplicationRecord
    belongs_to :user
    # validates :date_due, presence: true
    # validates :to_do, presence: true
end
